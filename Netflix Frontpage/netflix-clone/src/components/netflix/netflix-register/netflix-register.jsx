export function NetflixRegister(){
    return(
        <form className="mt-5">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group input-group-lg">
                <input type="email" placeholder="Your Email Address" className="form-control" />
                <button className="btn btn-danger ms-2">
                    Get Started <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </form>
    )
}