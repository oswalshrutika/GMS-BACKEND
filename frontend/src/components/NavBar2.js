import {Link} from 'react-router-dom'

const Navbar2 = () =>{
    return(
        <div>
             <nav class="navbar navbar-light bg-light">
            <ul className="list-inline">
              <li className="list-inline-item "><Link className="nav-link " to="/home">Home</Link></li>
              <li className="list-inline-item "><Link className="nav-link" to="/browse">Browse</Link></li>
              {/* <li className="list-inline-item ">
                <label className="list-inline-item " for="Category">Category</label>
                <select name="Category" id="cars">
                  <option value="fruits">fruits</option>
                  <option value="vegitables">vegitables</option>
                  <option value="grocery">grocery</option>
                  <option value="grains">grains</option>
                </select>
              </li> */}
              <li className="list-inline-item ">
                <form className="d-flex list-inline-item">
                  <input className="form-control me-2 list-inline-item" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success list-inline-item" type="submit">Search</button>
                </form>
              </li>
              <li className="list-inline-item "> <Link className="nav-link" to="/profile">profile</Link></li>

              <li className="list-inline-item "> <Link className="nav-link" to="/cart">cart</Link></li>
            </ul>

          </nav>
        </div>
    )
}

export default Navbar2;

