import './netflix-header.css'

export function NetflixHeader() {
    return(
        <header className='p-4 text-white d-flex justify-content-between'>
            <div>
                <span className='brand-title'>NETFLIX</span>
            </div>
            <div className='d-flex'>
                <div className='input-group'>
                    <span className='bi bi-globe input-group-text'></span>
                    <select className='form-select'>
                        <option>Language</option>
                        <option>Hindi</option>
                        <option>English</option>
                    </select>
                </div>
                <button className='btn btn-danger ms-3'>Sign In</button>
            </div>
        </header>
    )
}