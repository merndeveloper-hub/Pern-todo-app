import React, { Fragment, useState } from "react";

const Register = () => {

    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { firstname, email, lastname, password };
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Register
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 className='modal-button'>Register</h4>

                            {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
                        </div>
                        <div class="modal-body" style={{display: "dsplay", justifyContent: "center", alignContent:"center", justifyContent: "column"}}>
                            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                                <input type="text" placeholder="firstname" className="form-control" value={firstname} onChange={e => setFirst(e.target.value)} />
                                <input type="text" placeholder="lastname" className="form-control" value={lastname} onChange={e => setLast(e.target.value)} />
                                <input type="email" placeholder="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                                <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Signup</button>

                        </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register;



