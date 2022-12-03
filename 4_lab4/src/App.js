import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Create from './lab4/Create';
import Table from './lab4/Table';
import Page from './lab4/Page';
import CreateModal from './lab4/Modal/CreateModal';
import DeleteModal from './lab4/Modal/DeleteModal';
import EditModal from './lab4/Modal/EditModal';
import ReadModal from './lab4/Modal/ReadModal';


function App() {
  let users = [{
      id: "11",
      name: "Red",
      description: "1. kdmcxk okdc oqwkfjivw ,cedxsm",
      price: "$2.99"
    },
    {
      id: "12",
      name: "Flow",
      description: "2. kdmcxk okdc oqwkfjivw ,cedxsm",
      price: "$8.09"
    },
    {
      id: "13",
      name: "Mount",
      description: "3. kdmcxk okdc oqwkfjivw ,cedxsm",
      price: "$7"
    },
    {
      id: "14",
      name: "Can",
      description: "4. kdmcxk okdc oqwkfjivw ,cedxsm",
      price: "$11.39"
    },
    {
      id: "15",
      name: "Flow",
      description: "2. kdmcxk okdc oqwkfjivw ,cedxsm",
      price: "$8.09"
    },
    {
      id: "16",
      name: "Mount",
      description: "3. kdmcxk okdc oqwkfjivw ,cedxsm",
      price: "$7"
    },
    {
      id: "17",
      name: "Can",
      description: "4. kdmcxk okdc oqwkfjivw ,cedxsm",
      price: "$11.39"
    }];
    
    let modal = {
      btCreate :  false,
      btRead :  false,
      btEdit :  false,
      btDelete :  false}
    
    let ViewUser = users.slice(0 , 5);
    

    // state "User" là Object chứa tất cả data (khi Edit, delete.. thì thay đổi biến này )
    // state "UserView" là Object lấy 5 giá trị từ "changeUser" để hiển thị lên màn dựa vào biến "page"
    // state "page" thay đổi khi nhấn đổi trang

    const [UserView,setUserView] = useState(ViewUser)  // UserView lấy 5 là phần hiển thị trên màn hình, tối đa 5 item/page
    // Thay đổi trang khi nhấn chuyển trang cần setUserView dựa trên biến page
    // đầu tiên là thay đổi biến "page" chỉ số trang
    const [page,setpage] = useState(1)
        const page1 = () => {
          setpage(1);
          setUserView(User.slice(0, 5))               // UserView lấy 5 item data từ "changeUser"
        }
        const page2 = () => {
          console.log(page)
          setpage(2);
          setUserView(User.slice(5,10))
          console.log(UserView)
        }
        const IncreasePage = () => {
          let x = page+1
          setpage(x);
          setUserView(User.slice((x-1)*5, x*5))
        }
        const DecreasePage = () => {
          let x = page-1
          setpage(x);
          setUserView(User.slice((x-1)*5,((x)*5)))
          console.log(UserView)
        }
    
    // Xác định vị trí của item cần Delete,edit,...
    // nhấn vào nút Delete,edit,read ở màn hình chính của hàng nào thì lấy key của hàng đó gắn cho biến index
    const [ValueIndex,setValueIndex] = useState(0)
    const setIndex = (index) => {
      setValueIndex(index);
      console.log(index)
    }

    // add thêm/xoá phần tử vào mảng
    const [User,setUser] = useState(users)
        const addItem = (newItem) => {
          User.splice(0, 0, newItem);                       // add vào đầu danh sách
          setUser(User);                                    // set lại biến gốc User
          setUserView(User.slice((page-1)*5, page*5));      // đồng thời set lại biến hiển thị UserView
          }
        const editItem = (editItem) => {
          console.log(page)
          User.splice((page-1)*5+ValueIndex , 1, editItem);  //edit: xoá phần tử cũ và thêm phần tử đã edit vào vị trí ValueIndex
          setUser(User);
          setUserView(User.slice((page-1)*5, page*5));
          }
        const deleteItem = () => {                                 // khi nhấn Delete trên ModalDelete
          User.splice((page-1)*5+ValueIndex , 1)
          setUser(User);
          setUserView(User.slice((page-1)*5, page*5));
          }

    // hiển thị modal Create
    const [btCreate,setbtCreate] = useState(modal.btCreate)
    const ChangeCreateModal = () => {
      let newbtCreate =! btCreate;
      setbtCreate(newbtCreate);
      }
    // hiển thị modal Read
    const [btRead,setbtRead] = useState(modal.btRead)
    const ChangeReadModal = () => {
      let newbtRead =! btRead;
      setbtRead(newbtRead);
      }
    // hiển thị modal Edit
    const [btEdit,setbtEdit] = useState(modal.btEdit)
    const ChangeEditModal = () => {
      let newbtEdit =! btEdit;
      setbtEdit(newbtEdit);
      }
    // hiển thị modal Delete
    const [btDelete,setbtDelete] = useState(modal.btDelete)
    const ChangeDeleteModal = () => {
      let newbtDelete =! btDelete;
      setbtDelete(newbtDelete);
      }

  return (
    <div className="App mx-[10px]">
      <Create OpenModal = {ChangeCreateModal}/>
      
      <Table 
        user = {UserView} 
        OpenReadModal = {ChangeReadModal}
        OpenEditModal = {ChangeEditModal} 
        OpenDeleteModal = {ChangeDeleteModal} 
        setIndex= {setIndex}/>
      
      <Page 
        page = {page}
        page1 = {page1}
        page2 = {page2}
        Increase = {IncreasePage}
        Decrease = {DecreasePage}/>

      { btCreate && <CreateModal CloseModal={ChangeCreateModal} addItem={addItem}/>}
      { btRead && <ReadModal CloseModal={ChangeReadModal} OpenEditModal={ChangeEditModal} item = {User[ValueIndex]}/>}
      { btEdit && <EditModal CloseModal={ChangeEditModal} editItem={editItem} item = {User[ValueIndex]}/>}
      { btDelete && <DeleteModal CloseModal={ChangeDeleteModal} deleteItem={deleteItem} /> }
    </div>
  );
}

export default App;
