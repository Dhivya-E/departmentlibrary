
import Books from "../components/showbook";
import Createbook from "../components/addbook";


function Book() {
  const classes = {
    borderRadius: "15",
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
  return (
    <div style={{textAlign:"center"}}>
      <div>
          <div>
            <div style={{display:"flex",padding:"5%"}}>    
              <div style={{backgroundColor:"white",marginRight:"10%",borderRadius:"5%"}}>
              <div style={classes} position="static" color="inherit" >
                  <Createbook />
              </div>
              </div>
              <div style={{backgroundColor:"white",borderRadius:"5%"}}>
                <div style={classes} position="static" color="inherit">
                  <Books/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Book;
