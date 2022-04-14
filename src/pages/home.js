import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import '../App.css';




function Home() {
  return (
  	<Container maxWidth="sm" className="home-part">
	    <Box component="span">
	      	<TextField label="Featured" variant="standard" className="home-featured" InputLabelProps={{
		          style: {
		            color:'black',
		    }}}/>
	      	<img src="assets/images/summer.png" alt="" width="100%" className="home-featured"/>
	      	<TextField label="Search" size="small" variant="outlined"  className="home-featured home-textfield-search" 
	      	InputLabelProps={{
		          style: {
		            color:'black',
		    }}}/>
	    </Box>
    </Container>
    );
}
export default Home;