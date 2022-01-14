import React, { useContext, useEffect } from "react"
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

function Login() {
  const {loggedIn, setLoggedIn} = useContext(UserContext)
  let navigate = useNavigate() 
  useEffect(() => {
    if (loggedIn){
        navigate("/app/search")
    }
  }, [loggedIn, navigate])

  const signIn = (event) => {
    setLoggedIn(true)
    navigate("/app/search")
    event.preventDefault()
  }

  return  <>
            <div className="container-fluid" style={{maxWidth: '330px', marginTop: '15%'}}>
                <Card color="light" className="text-center shadow">
                    <CardBody>
                        <CardTitle tag="h5">Weather App - Login</CardTitle>
                        <CardText>Please sign in to browse the site</CardText>
                        <Form inline onSubmit={signIn}>
                            <FormGroup floating className="mb-2 me-sm-2 mb-sm-0">
                                <Input id="email" name="email" placeholder="Please enter your email." type="email"/>
                                <Label className="me-sm-2" for="email">Email</Label>
                            </FormGroup>
                            <br/>
                            <FormGroup floating className="mb-2 me-sm-2 mb-sm-0">
                                <Input id="password" name="password" placeholder="Please enter your password." type="password"/>
                                <Label className="me-sm-2" for="password">Password</Label>
                            </FormGroup>
                            <br/>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>     
            </div>
          </>
}

export default Login
