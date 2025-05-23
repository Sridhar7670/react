import './App.css';
import Btn from './btn.js'
import {useState } from 'react';
import ReactMarkdown from "react-markdown";
import DOMPurify from "dompurify";
export let App=()=>{
  let [c,setc]=useState(0)
  let inc=()=>{
    console.log(c)
    setc(c+1)
    // So setc(c++) becomes setc(0) (even though c becomes 1 after this line).
    // React sees no actual change in state (0 -> 0), so it doesn't re-render.
  }

  let reset=()=>{
    setc(0)
  }
  return (

    <div className="container">
      <h2>{c}</h2>
      <Btn CNAME="BTN"  Behaviour={inc}Name="INC" />
      <Btn CNAME="BTN" Behaviour={reset} Name="RESET"/>
    </div>
  )
}

export let App1=()=>{
  let [dec,setDec]=useState(0)
  let decre=()=>{
    setDec(dec-1)
  }
  let reset=()=>{
    setDec(0)
  }
  return(
    <div className="container-1">
      <h2>{dec}</h2>
      <Btn CNAME="BTN" Behaviour={decre} Name="DECREMENT"/>
      <Btn CNAME="BTN" Behaviour={reset} Name="RESET"/>
    </div>
  )

}
export function App2(){
  let [c,setc]=useState(0)
  // let inc=()=>{
  //   setc(c+1)
  // }
  // let reset=()=>{
  //   setc(0)
  // }
  // let dec=()=>{
  //   setc(c-1)
  // }
  return(
    
  <div className="container-1">
  <h2>{c}</h2>
  <Btn CNAME="BTN" Behaviour={()=>{setc(c+1)}} Name="INC"/>
  <Btn CNAME="BTN" Behaviour={()=>{setc(c-1)}} Name="DEC"/>
  <Btn CNAME="BTN" Behaviour={()=>{setc(0)}} Name="RESET"/>

</div>
  )
}
export function App3(){
  let [data,setdata]=useState("")
  let fun=(e)=>{
    // console.log(e.target)
    setdata(e.target.value)
  }
  return(
    <div className="container-1">
      <input type="text" placeholder="enter value" onChange={fun}/>
      <div>{data}</div>
  

    </div>
  )
}
export function App4(){
  let [data,setdata]=useState(0)
  let [fact,setfact]=useState(1)
  let fun=(e)=>{
    setdata(e.target.value)
    console.log(data)
  }
  let fun1=()=>{
    let x=1
    for (let i=1;i<=data;i++){x=x*i}
    setfact(x)
    setdata("")
  }

  return(
    <div className="container-1">
      <input type="number" placeholder="enter number" onChange={fun} />
      <Btn CNAME="BTN" Behaviour={fun1} Name="CALC"/>
      <div>{fact}</div>
    </div>
  )
}
export function App5(){
  let [data,setdata]=useState("")
  let [a,seta]=useState([])
  let fun=(e)=>{  setdata(e.target.value) }
  let add=()=>{ if(!data===""){seta([...a,data]) ;setdata("")}}
  return(
    <div className="container">
      <input type="text" placeholder="enter list items" onChange={fun} value={data}/>
      <Btn CNAME="BTN" Behaviour={add} Name="ADD"/>
      <ol > { a.map((data,i)=><li key={i+1}>{data}</li>) } </ol>
    </div>
  )
  
}
export function App6(){
  let [c,setc]=useState(0)
  let[f,setf]=useState(false)
  let [a,seta]=useState([])
  function Deec(){

    return(
      <div className="details">
      {
        a.map((data,i)=><p id="para">{i+1} st count:{data}</p>)
      }
      </div>
    )

  }
  return(
    
  <div className="container-1">
  <h2>{c}</h2>
  
  <Btn CNAME="BTN" Behaviour={()=>{setc(c+1)}} Name="INC"/>
  <Btn CNAME="BTN" Behaviour={()=>{setc(c-1)}} Name="DEC"/>
  <Btn CNAME="BTN" Behaviour={()=>{seta([...a,c]);setc(0);setf(true)}} Name="RESET"/>
  {f && <Deec/>}
</div>

  )
}

export function App7(){
let [a,seta]=useState(0)
let [b,setb]=useState(0)
let [c,setc]=useState(0)
let[f,setf]=useState(false)
return(
  <div className="container">
    <input type="number"onChange={(e)=>seta(parseInt(e.target.value))} value={a} />
    <input type="number" onChange={(e)=>setb(parseInt(e.target.value))} value={b}/>
    {/* if we want we can also use setc(eval(a+b)) */}
    <Btn Behaviour={() => {setc(a + b);setf(true)}} CNAME="BTN" Name="add" /> 
    <Btn Behaviour={() => {setc(a - b);setf(true)}} CNAME="BTN" Name="sub" />
    <Btn Behaviour={() => {setc(a / b);setf(true)}} CNAME="BTN" Name="div" />
    <Btn Behaviour={() => {setc(a * b);setf(true)}} CNAME="BTN" Name="mul" />

    {f && <div>{c}</div>}
  </div>
)


}

export function App8(){
  let data=JSON.parse(localStorage.getItem('details'))||[]
  let [a,seta]=useState(data)
  let [obj,setObj]=useState({name:"",dob:"",Address:"",gender:"",state:""})
  function fun(e){
    setObj({...obj,[e.target.name]: e.target.value})
  }
  function add(){
    if(obj.name!=="" && obj.dob!==""&& obj.Address!=="" && obj.gender!=="" &&obj.state!==""){
      const updated=[...a,obj]
      seta(updated)
      localStorage.setItem('details',JSON.stringify(updated))
      setObj({name:"",dob:"",Address:"",gender:"",state:""})
    }
    
    
  }
  return(
    <div className="container_input">
      <div id="form">
        Name
        <input type="text" name="name" onChange={fun} value={obj.name} placeholder="enter name"/>
        DOB
        <input type="date" name="dob" onChange={fun} value={obj.dob}/>
        ADDRESS
        <textarea name="Address" onChange={fun} value={obj.Address}>
        </textarea>
        <div>
          <input type="radio" name="gender" value="male" onChange={fun} checked={obj.gender==="male"}/>Male
          <input type="radio" name="gender" value="female" onChange={fun} checked={obj.gender==="female"}/>Female
        </div>

        <select onChange={fun} name='state' value={obj.state}>
            <option value="" disabled>---select---</option>
            <option value="ANDHRAPRADESH">ANDHRAPRADESH</option>
            <option value="TELANGANA">TELANGANA</option>
      </select>

        <button onClick={add}>Add</button>
      </div>
    
    {a.length>0 && <table>
      <thead>
        <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Adress</th>
        <th>gender</th>
        <th>State</th>
        </tr>  
      </thead>
      <tbody>
      {
        a.map((data,i)=>{
          return (
          <tr key={`${i+1}`}>
            <td>{i+1}</td>
            <td>{data.name}</td>
            <td>{data.Address}</td>
            <td>{data.gender}</td>
            <td>{data.state}</td>
          </tr>
          )
        }
        )
      
      }
      </tbody>

      </table>
    }
    </div>
  )
}

export function App9(){
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [intId, setIntId] = useState(-1);
  const [ms,setms]=useState(0);
  const [msid,setmsid]=useState(-1);
  const [f,setf]=useState(false)
  const [laps,setlaps]=useState([])

  const h = Math.floor(totalSeconds / 3600) % 12 ; 
  const m = Math.floor((totalSeconds % 3600) / 60);
  const c = totalSeconds % 60;

function reset() {
      clearInterval(msid);
      clearInterval(intId);
      setTotalSeconds(0);
      setIntId(-1);
      setms(0);
      setmsid(-1);

};

function inc() {
      setTotalSeconds(prev => {
          const newTotal = prev + 1;
          if (newTotal >= 12 * 3600) { 
              reset();
              return 0;
          }
          return newTotal;
      });
  };
  const millisec = () => {
    setms(prev => (prev === 99 ? 0 : prev + 1)); // Resets at 99
  };
  function start() {
    if (intId === -1) {
        const id = setInterval(inc,1000);
        
        setIntId(id);
    }
    if(msid===-1){const ms=setInterval(millisec,10);
      setmsid(ms)}
};

function stop() {
      clearInterval(msid)
      clearInterval(intId);
      setIntId(-1);
      setmsid(-1);
  };
function lap(){
  setf(true)
  const formattedtime=`${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${c < 10 ? "0" + c : c}:${ms<10?"0"+ms:ms}`
  setlaps([...laps,formattedtime])
}
function getOrdinal(n) {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

  return (
      <div className="container_watch">
          <div className="display_panel">
              {h < 10 ? "0" + h : h}:{m < 10 ? "0" + m : m}:{c < 10 ? "0" + c : c}:{ms<10?"0"+ms:ms}
          </div>
          <div className="btns">
              <button onClick={start} className="BTN">START</button>
              <button onClick={stop} className="BTN">STOP</button>
              <button onClick={lap} className='BTN'>LAP</button>
              <button onClick={reset} className="BTN">RESET</button>
              
          </div>
          {
            f && (
              <div>
                {laps
                  .slice()       // to avoid mutating original
                  .reverse()
                  .map((laptime, i) => (
                    <div key={i} id="laps">
                      {getOrdinal(laps.length - i)} Lap: {laptime}
                    </div>
                ))
                }
              </div>
            )
}

    </div>);

}
export function App10(){
  let[totalsec,setotaltsec]=useState(0);
  let[iid,setiid]=useState(-1);
  let[ms,setms]=useState(0);
  let[msid,setmsid]=useState(-1);
  let [f,setf]=useState(false);
  let[laps,setlaps]=useState([])
  let h=Math.floor(totalsec/3600)%12;
  let m=Math.floor((totalsec/3600)%60);
  let c=Math.floor(totalsec%60);
  function millisec(){
    setms((prev)=>(prev===99 ? 0: prev+1))
  }
  function inc(){
    setotaltsec((prev)=>{
      const newsec=prev+1;
      if(newsec>=12*3600){reset();return 0};
      return newsec
    })
  }
  function start(){
    if(iid===-1){setiid(setInterval(inc,1000))}
    if(msid===-1){setmsid(setInterval(millisec,10))}
  }
  function stop(){
    clearInterval(iid);
    clearInterval(msid);
    setiid(-1);
    setmsid(-1);
   
  }
  function lap(){
    setf(true);
    const formattedtime=` ${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${c < 10 ? "0" + c : c}:${ms<10?"0"+ms:ms}`
    setlaps([...laps,formattedtime])

  }
  function reset(){
    clearInterval(setiid);
    clearInterval(setmsid);
    setotaltsec(0);
    setms(0);
    setiid(-1);
    setmsid(-1);
  }

  return (
    <div className="container_watch">
        <div className="display_panel">
            {h < 10 ? "0" + h : h}:{m < 10 ? "0" + m : m}:{c < 10 ? "0" + c : c}:{ms<10?"0"+ms:ms}
        </div>
        <div className="btns">
            <button onClick={start} className="BTN">START</button>
            <button onClick={stop} className="BTN">STOP</button>
            <button onClick={lap} className='BTN'>LAP</button>
            <button onClick={reset} className="BTN">RESET</button>
            
        </div>
        {f && 
        <div>
          {
            laps.slice().reverse().map((data,i)=>{
              return(
                <div> {i+1}:{data}</div>
              )
            })
          }
        </div>}
    </div>)
}
export function App11(){
  let data=JSON.parse(localStorage.getItem('det'))||[]
  let[a,seta]=useState(data)
  let[obj,setobj]=useState({name:"",age:"",Address:""})
  
  let fun=(e)=>{
    setobj({...obj,[e.target.name]:e.target.value})
  }
  let add=()=>{
    let update=[...a,obj]
    seta(update)
    localStorage.setItem('det',JSON.stringify(update))
    setobj({name:"",age:"",Address:""})

  }
  return(
    <div>
      <div className='form'>
        <input type='text' name="name" value={obj.name} onChange={fun}/>
        <input type='number'name='age' value={obj.age} onChange={fun}/>
        <input type='text'name='Address' value={obj.Address} onChange={fun}/>
        <button onClick={add}>ADD</button>

      </div>
  {a.length>0 && 
  <div>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Adress</td>
        </tr>
      </thead>
      <tbody>
        {
          a.map((data,i)=>{
            return (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.Address}</td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
  }
  </div>
  )
} 
export function App12(){
  const allData = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 59.99,
      date: "2024-12-01"
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 699.99,
      date: "2024-11-15"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 29.99,
      date: "2024-10-20"
    },
    {
      id: 4,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      date: "2024-09-25"
    },
    {
      id: 5,
      name: "Men's T-Shirt",
      category: "Clothing",
      price: 14.99,
      date: "2024-09-10"
    },
    {
      id: 6,
      name: "Women's Jeans",
      category: "Clothing",
      price: 39.99,
      date: "2024-08-30"
    },
    {
      id: 7,
      name: "Sneakers",
      category: "Clothing",
      price: 64.99,
      date: "2024-08-20"
    },
    {
      id: 8,
      name: "Winter Jacket",
      category: "Clothing",
      price: 89.99,
      date: "2024-08-05"
    },
    {
      id: 9,
      name: "Organic Bananas",
      category: "Groceries",
      price: 1.99,
      date: "2024-07-01"
    },
    {
      id: 10,
      name: "Milk - 1 Gallon",
      category: "Groceries",
      price: 3.49,
      date: "2024-07-01"
    },
    {
      id: 11,
      name: "Brown Bread",
      category: "Groceries",
      price: 2.49,
      date: "2024-07-01"
    },
    {
      id: 12,
      name: "Free-Range Eggs (12 pack)",
      category: "Groceries",
      price: 4.99,
      date: "2024-07-02"
    },
    {
      id: 13,
      name: "Microwave Oven",
      category: "Home & Kitchen",
      price: 79.99,
      date: "2024-06-15"
    },
    {
      id: 14,
      name: "Stainless Steel Cookware Set",
      category: "Home & Kitchen",
      price: 149.99,
      date: "2024-06-10"
    },
    {
      id: 15,
      name: "Vacuum Cleaner",
      category: "Home & Kitchen",
      price: 129.99,
      date: "2024-06-05"
    },
    {
      id: 16,
      name: "LED Desk Lamp",
      category: "Home & Kitchen",
      price: 24.99,
      date: "2024-06-01"
    },
    {
      id: 17,
      name: "Shampoo 500ml",
      category: "Personal Care",
      price: 5.99,
      date: "2024-05-20"
    },
    {
      id: 18,
      name: "Toothpaste (Pack of 2)",
      category: "Personal Care",
      price: 4.49,
      date: "2024-05-18"
    },
    {
      id: 19,
      name: "Body Wash",
      category: "Personal Care",
      price: 6.99,
      date: "2024-05-15"
    },
    {
      id: 20,
      name: "Face Moisturizer",
      category: "Personal Care",
      price: 12.99,
      date: "2024-05-10"
    }
  ];
  
  const[category,setcategory]=useState("all")
  const[sortorder,setSortorder]=useState("asc")
  const[sortDate,setSortdate]=useState("newest")
  const filteredData= category=="all" ? allData : allData.filter((item)=>item.category==category)
  const sortedData = [...filteredData].sort((a, b) => {
    let dateCompare = 0;
    if (sortDate === "newest") {
      dateCompare = new Date(b.date) - new Date(a.date);
    } else if (sortDate === "oldest") {
      dateCompare = new Date(a.date) - new Date(b.date);
    }
  
    if (dateCompare !== 0) return dateCompare;
  
    // Dates are equal, so compare price
    if (sortorder === "asc") {
      return a.price - b.price;
    } else if (sortorder === "desc") {
      return b.price - a.price;
    }
  
    return 0;
  });
  
  return (
    // <input type="text" name="sortBy" placeholder="Sort by" onChange={(e) => console.log(e.target.value)}/>
   <div>
     <select name="sortby" onChange={(e)=>{setcategory(e.target.value)}} defaultValue={category}>
      <option value="all" >all</option>
      <option value="Electronics" >Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Groceries">Groceries</option>
      <option value="Home & Kitchen">Home & Kitchen</option>
      <option value="Personal Care">Personal Care</option>

    </select>
    <select name="sortorder" onChange={(e)=>setSortorder(e.target.value)} >
      <option  selected disabled value="" >sort by price</option>
      <option value="asc" >LOW TO HIGH</option>
      <option value="dsc" >HIGH TO LOW</option>
    </select>
    <select name="sortDate" onChange={(e)=>setSortdate(e.target.value)} >
    <option  selected disabled value="" >sort by date</option>
      <option value="newest" >Recent</option>
      <option value="oldest" >Oldest</option>
    </select>
    

        <div className='card-container'>
          {
          sortedData.map((i,ind)=>{return (
            
            <div key={ind} className='card'>
              <div>{i.id}</div>
              <h4>{i.name}</h4>
              <div>{i.price}</div>
              <p >date: {i.date}</p>
            </div>)
          }
        )
        }

        </div>
          
   </div>
)
    
  
}

export function App13(){
const [markdown, setMarkdown] = useState("");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ width: "50%", height: "300px" }}
        placeholder="Write your markdown here..."
      />
      <div style={{ width: "50%", border: "1px solid #ccc", padding: "10px" }}>
        <Preview markdown={markdown} />
      </div>
    </div>
  );
function Preview({ markdown }) {
  const sanitizedHtml = DOMPurify.sanitize(markdown);

  return (
    <ReactMarkdown>{sanitizedHtml}</ReactMarkdown>
  );
}


}



function App14() {
  const images = [
  { src: "https://dummyimage.com/200x300/000/fff&text=Baahubali", alt: "Image 1" },
  { src: "https://dummyimage.com/200x300/000/fff&text=dangal", alt: "Image 2" },
  { src: "https://dummyimage.com/200x300/000/fff&text=bongal", alt: "Image 3" },
  // Add more images...
];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((i) => (i + 1) % images.length);
  const goPrev = () => setSelectedIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div>
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img src={images[selectedIndex].src} alt="" />
          <button className="prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>&lt;</button>
          <button className="next" onClick={(e) => { e.stopPropagation(); goNext(); }}>&gt;</button>
        </div>
      )}
    </div>
  );
}

export default App14;
