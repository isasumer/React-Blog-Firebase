import { Form, Card, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
export default function Register() {

  const { currentUser } = useAuth();
console.log(currentUser)


  return (
    
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="w-50" style={{ maxwidth: "400px" }}>
        <Form.Label>Email : </Form.Label>
        <Form.Label> {currentUser && currentUser.email}</Form.Label>
       
  
      </Card>
    </Container>
  );
}
