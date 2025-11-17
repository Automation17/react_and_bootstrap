import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <div class="d-flex   align-items-center p-3 
            px-4 mb-3 bg-white border-bottom border-primary">
            <h5 class="my-0 me-auto font-weight-normal">Company name</h5>
            <nav class="my-2  mr-3">
                <Link class="p-2 text-dark" to="features">Features</Link>
                <Link class="p-2 text-dark" to="enterprise">Enterprise</Link>
                <Link class="p-2 text-dark" to="support">Support</Link>
                <Link class="p-2 text-dark" to="/">Pricing</Link>
            </nav>
            <a class="btn btn-outline-primary" href="#">Sign up</a>
        </div>
    </>
  );
}