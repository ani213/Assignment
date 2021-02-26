import React, { PureComponent } from 'react';
import { ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import "./App.css"
import Quill from './Quill';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      types:[],
      edit:false,
      on:false,
      value:"<p>hello<p/>",
    }

    this.myRef = React.createRef();
  }
 
get=(e)=>{
  return <>{e}</>
}

hmo=()=>{
  let value=this.myRef.current.childNodes[0];
console.log(value,"hover")

  this.setState({
    on:true
  })
}
hmout=()=>{
  this.setState({
    on:false
  })
}
hck=()=>{
let value=this.myRef.current.childNodes[0];
console.log(value)

  this.setState({
    edit:true,
    value:value
  })
}
save=(e)=>{
  console.log(e)
  this.setState({
    value:e,
    edit:false
  })
}
cancle=()=>{
  this.setState({
    edit:false
  })
}

  // handleSelect=(e)=>{
  //   fetch(`http://localhost:8080/app/${e.target.value}`, {
  //     method: "GET",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   }).then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => {
  //         this.setState({
  //           data: data
  //         })
  //       })
  //     }
  //   })
  // }  
componentDidMount(){
  // fetch("http://localhost:8080/app/A", {
  //   method: "GET",
  //   headers: new Headers({
  //     "Content-Type": "application/json",
  //   }),
  // }).then((response) => {
  //   if (response.ok) {
  //     response.json().then((data) => {
  //       this.setState({
  //         data: data
  //       })
  //     })
  //   }
  // })
  // fetch("http://localhost:8080/app/all/types", {
  //   method: "GET",
  //   headers: new Headers({
  //     "Content-Type": "application/json",
  //   }),
  // }).then((response) => {
  //   if (response.ok) {
  //     response.json().then((data) => {
  //       this.setState({
  //         types: data
  //       })
  //     })
  //   }
  // })
}  
  render() { 
    return ( 
      <div className="pad">
        {!this.state.edit && <div onMouseOver={this.hmo}  onMouseOut={this.hmout} className={`${this.state.on?"bor":""}`} onClick={this.hck}><p  className="parr">
      
          <div dangerouslySetInnerHTML={{__html: this.state.value}} ref={this.myRef}/>
        {this.state.on &&<div className="ed">
          <IconButton ><EditIcon /></IconButton>
        </div>}
        </p>
        
        </div>}

          {this.state.edit && <Quill value={this.state.value} save={this.save} cancle={this.cancle}/>}







        {/* <div className="select-container">
          <label className="label">Select Type: </label>
          <select onChange={this.handleSelect} className="select" >
            {this.state.types && this.state.types.map((ele, index) => {
              return <option value={ele} key={index+"opt"}>{ele}</option>
            })}
          </select>
        </div>
        <div className="main-container">
          <ResponsiveContainer width={850} height="80%">
            <BarChart
              width={600}
              height={500}
              data={this.state.data}
              margin={{
                top: 0,
                right: 30,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Number" fill="#FFD700" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <div className="codded">
            <h3>Coded with love by Aniket Kumar Verma.</h3>
          </div>
        </div> */}
      </div>

     );
  }
}
 
export default App;