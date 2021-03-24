import React from 'react'
import { Alert ,Button,Container} from "react-bootstrap";
function AlertDismissibleExample({setShow,show,msg}) {
    if (show) {
      return (
       <Container>
            <Alert style={{backgroundColor:' #FFD2D2' , height: 'auto'}} variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {msg}
          </p>
        </Alert>
       </Container>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  } 
  

export default AlertDismissibleExample
