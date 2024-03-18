import {Link, useLoaderData, useNavigation} from "react-router-dom";

export const Data = () => {

const dataToShow = useLoaderData();
const navigation = useNavigation();

if(navigation.state === 'loading') {
  return  <h1>LOADING .....</h1>
}
  return (<>
    <Link to={"/"}  >Go BACK  </Link>
    <h3>DATA HEREn</h3>
    <h2 style={{color:'red'}}>{dataToShow}</h2>
  </>);
}

export const dataLoader =async ()=>{
  const res = await  fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await  res.json();
  return data.title;
}
