function Nav() {
    return (
      <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand px-5" href="#">DEPLIBRARY</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav px-5">
                            <li class="nav-item">
                            <a class="nav-link active px-5" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link px-5" href="/book">Books</a>
                            </li>                         
                        </ul>
                        </div>
                    </div>
                </nav>
      </>
    );
  }
  
  export default Nav;
  