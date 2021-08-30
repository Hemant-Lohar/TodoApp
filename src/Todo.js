import React, {useState, useEffect} from 'react'
import './index.css';

    const getLocalData = () => {
        const list = localStorage.getItem("TodoList")

        if(list) {
            return JSON.parse(list);
        }else {
            return [];
        }
    } 

    

function Todo() {

    const [inputdata, setInputdata] = useState("");
    const [items, setitems] = useState(getLocalData())
    const [isEditItem, setisEditItem] = useState("")
    const [toggler, settoggler] = useState(false)
    const [checkbtn, setcheckbtn] = useState(false)
   
   

    const addItems = () => {
        if (!inputdata) {
            alert("Pls Enter ToDo First !");          
        }else if(inputdata && toggler) {
            setitems (
                items.map((curEle) => {
                    if(curEle.id === isEditItem) {
                        return {...curEle, name:inputdata }
                    }
                    return curEle
                })
            )
            setInputdata("")
            setisEditItem(null)
            settoggler(false)

        }else {
            const newInput = {
                id: new Date().getTime().toString(),
                name: inputdata
            }
            setitems([...items, newInput]);
            setInputdata("")
        }
    }

    const editItem = (index) => {
        const itemToEdit = items.find((curEle) => {
            return curEle.id === index;
        })

        setInputdata(itemToEdit.name)
        setisEditItem(index)
        settoggler(true)
    }

    const deleteItems = (index) => {
        const updatedItems = items.filter((curEle) => {
            return curEle.id !== index
        });
        setitems(updatedItems)
    }

    const deleteAll =() => {
        setitems([])
    }

    const btn = () => {
        if(!items.length){
            setcheckbtn(false)
        }else{
            setcheckbtn(true)
        }
    }
    
    useEffect(() => {
        btn(); 
    })

    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(items));
    }, [items])

    return (
        <>
            <div className="container flex flex-col text-center  max-w-screen md:max-h-full h-screen bg-red-50 ">

                <div className="title filter drop-shadow-md bg-white">
                    <div className="w-32 p-3 mx-auto filter drop-shadow-md"><img src="images/to-do-logo.png" alt="ToDo Logo" className="mt-4" /></div>
                    <div><h1 className="text-pink-800 text-3xl pb-8 font-extrabold">ToDo List ✌</h1></div>
                </div>

                <div className="main bg-red-50 pt-2 flex flex-col">
                    
                        <div className="rounded-full bg-white py-2 px-2 my-6 flex max-w-xs mx-auto justify-between filter drop-shadow-md focus-within:ringColor-red focus:ring-2 overflow-ellipsis overflow-hidden">
                            <input type="text"
                            placeholder="✍  Add ToDo Here"
                            className="text-lg text-left ml-4 text-black focus:outline-none focus:bg-purple-600 focus:bg-opacity-5" 
                            value={inputdata}
                            onChange={(event) => {setInputdata(event.target.value)}}
                            />
                            <div className="rounded-full hover:bg-purple-600  bg-purple-600  bg-opacity-20  h-8 w-8 flex items-center justify-center ">

                                {
                                    toggler ? (
                                        <i className="fas fa-edit text-purple-900 hover:text-white text-lg " onClick={addItems}></i>
                                    ): (
                                        <i className="fas fa-plus text-purple-900 hover:text-white text-lg " onClick={addItems}></i>
                                    )
                                }
                            </div>
                        </div>
                   

                    <div className="showitems mb-4">
                        {
                            items.map((curEle) => {
                                return(
                                    <div className="todoitem  rounded-md bg-white py-2 px-4 flex max-w-xs mx-auto my-4 justify-between hover:bg-gray-100 filter drop-shadow-md" key={curEle.id}>
                                        <h3 className="flex font-semibold text-gray-800 break-all" >{curEle.name}</h3>
                                        <div className="flex items-center">

                                        <i className="fas fa-edit  ml-4 text-purple-900 hover:text-green-500"
                                            onClick={() => {
                                                editItem(curEle.id)
                                            }} ></i>

                                        <i className="fas fa-trash ml-4 text-purple-900 hover:text-red-600" 
                                            onClick={() => {
                                                deleteItems(curEle.id)
                                            }} ></i>

                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>

                    <div className="checkitems mb-4">
                        
                        {
                            checkbtn ? (
                                <button className="bg-purple-800 bg-opacity-85 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 pt-2 pb-2 px-4 rounded-md font-semibold text-white mb-5"
                                onClick={deleteAll}
                                >Check List</button>
                                ):(
                                    false
                                )
                        }
                            
                         
                        
                               
                    </div>

                </div>
                <footer className="mt-auto py-4 text-xs bg-gray-700 text-gray-600 ">
                        <div className="flex justify-center items-center min-w-min">
                            <p className="text-center text-gray-200  mx-4">&copy;Hemamt Lohar 2021 </p>
                            <a href="https://github.com/Hemant-Lohar"><i class="fab fa-github text-gray-400 hover:text-white mx-4 text-xl"></i></a>
                            <a href="https://www.linkedin.com/in/hemant-lohar-216b911a0/"><i class="fab fa-linkedin text-gray-400 hover:text-white mx-4 text-xl"></i></a>
                            <a href="https://www.instagram.com/the_hemant___/"><i class="fab fa-instagram text-gray-400 hover:text-white mx-4 text-xl"></i></a>
                        </div>
                </footer>
            </div>
        </>
    )
}

export default Todo
