import React from 'react'

function Todos() {
    return (
        <>
            <div className="main-div">
                <div className="inner-div">
                    <figure>
                        <i className='bi bi-pen'></i>
                        <figcaption>Add Todos Here</figcaption>
                    </figure>
                    <div className="inputdiv">
                        <input type="text" name="add_todo" id="todoimput" placeholder='Add Todos....' />
                        <i className="bi bi-plus" title='Add item'></i>
                    </div>

                    <div className="items">
                        <div className="item">
                            <div>Apple</div>
                            <i className="bi bi-trash" title='Remove item'></i>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todos