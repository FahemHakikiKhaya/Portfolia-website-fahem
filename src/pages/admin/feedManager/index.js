import React,{useState,useEffect} from 'react'
import axios from '../../../utils/axios'
import NavBar from '../../../component/navigation/NavBar'
import DisplayUpdate from './DisplayUpdate'
import Manager from './Manager'
import Header from '../Heading/Heading'

function Index() {
    const [feeds, setFeeds] = useState([])
    const [slicedFeeds,setSlicedFeeds] = useState([])
    const [paginationState,setPaginationState] = useState({
        page:1,
        maxPage:0,
        itemPerPage:1,
    })

    // Menambil Feeds dari axios
    const fetchFeeds = ()=>{
      axios
      .get("/feeds")
      .then((res) => {
        const { data } = res;
        setFeeds(data);
        setSlicedFeeds(data);
        setPaginationState({
            ...paginationState,
            maxPage: Math.ceil(data.length / paginationState.itemPerPage),
          });
        
      })
      .catch((error) => {
        alert(error.message);
      });
    }

    
  
    useEffect(() => {
      fetchFeeds()
    }, [])

    useEffect(()=>{
     sliceData()
    },[paginationState])

    useEffect(()=>{
      sendData()
    })
    const sliceData = () => {
      const { page, itemPerPage } = paginationState;
      const startIndex = (page - 1) * itemPerPage;
      const endIndex = startIndex + itemPerPage;
      const slicedTodos = feeds.slice(startIndex, endIndex);
      setSlicedFeeds(slicedTodos);
    }

    const sendData = () =>{
      <Manager data = {slicedFeeds[0]}/>
    }

    const updateData = (formState) => {
      const {id} = slicedFeeds[0]
        axios
        .patch(`/feeds/${id}`,formState)
        .then((res) => {
            fetchFeeds()
        })
        .catch((err) => console.log(err));
    }
  
    
    return (
        <div className="container">
        <div >
            <NavBar/>
            <Header/>
       
        </div>
        <div className="d-flex row mx-0 ">
            <Manager updateData={updateData} slicedFeeds={slicedFeeds} />
            <DisplayUpdate 
            feeds={slicedFeeds} 
            paginationState={paginationState}
            setPaginationState={setPaginationState}
            />
            
        </div>
        </div>
        
    )
}

export default Index
