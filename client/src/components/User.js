import React, { Fragment, useState } from "react";

const User = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };
            const response = await fetch("http://localhost:5000/login", {
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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                Login 
            </button>


            <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 className='modal-button'>User-login</h4>

                        </div>
                        <div class="modal-body">
                            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                                 <input type="email" placeholder="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default User;



