"use client"

export default function App(){
  return(
    <div style={{background: "#dfe6e9", height:"100vh",}}>
      <div style={{display: "flex", justifyContent:"center"}}>
        <div>
          <div>
            <PostComponent
            name={"Apna Kolez"} 
            followerCount={69} 
            time={"69 secs ago"} 
            image={"https://imgs.search.brave.com/FVIeFobGAq7whTG96F9RbwARRqsEeoFLLszYqM5yaW4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NTE0MjI1NjA2Lzhk/MWViODU1LTA1MzEt/NDFiYy04M2JjLWI3/MDllZTJiYmI1Mw"} 
            description={"Gurenteed MicroHard"}/>
            <br/>
          </div>
          <div>
          <PostComponent
            name={"Apna Kolez"} 
            followerCount={69} 
            time={"69 secs ago"}  
            image={"https://imgs.search.brave.com/FVIeFobGAq7whTG96F9RbwARRqsEeoFLLszYqM5yaW4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NTE0MjI1NjA2Lzhk/MWViODU1LTA1MzEt/NDFiYy04M2JjLWI3/MDllZTJiYmI1Mw"} 
            description={"Gurenteed MicroHard"}/>
          <br/>
          </div>
          <div>
          <PostComponent
            name={"Apna Kolez"} 
            followerCount={69} 
            time={"69 secs ago"} 
            image={"https://imgs.search.brave.com/FVIeFobGAq7whTG96F9RbwARRqsEeoFLLszYqM5yaW4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/NTE0MjI1NjA2Lzhk/MWViODU1LTA1MzEt/NDFiYy04M2JjLWI3/MDllZTJiYmI1Mw"} 
            description={"Gurenteed MicroHard"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const style={width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding:20}

function PostComponent({name, followerCount, time, image, description}){
  return <div style={style}>
    <div style={{display: "flex"}}>
      <img src={image} style={{width:30, height:30, borderRadius: 30}}/>
      <div>
        <div style={{fontSize:10, marginLeft: 10}}>
          <b>
            {name}
          </b>
          <div>{followerCount} followers</div>
          <div style={{display:"flex"}}>
            <div>{time}</div>
            <img src={"https://imgs.search.brave.com/XvUMquS-Bjwf1EmnPsyivWNBMOhJBnc6A12HoTvqMC4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yNi8xMC9n/cmV5LXRyYW5zcGFy/ZW50LWVhcnRoLWds/b2JlLXZlY3Rvci0y/ODE4MjYxMC5qcGc"} style={{width:12, height: 12}}/>
          </div>
        </div>
        <div>
          <div style={{fontSize:12}}>
            {description}
          </div>
        </div>
      </div>
    </div>
  </div>
}