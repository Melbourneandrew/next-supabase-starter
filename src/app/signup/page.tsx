import { signup } from './actions'

export default function SignupPage({
  searchParams,
}: {
  searchParams: { error?: string; message?: string };
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Sign Up</h2>
          {searchParams?.error && (
            <div className="alert alert-error mb-4">
              <span>{searchParams.error}</span>
            </div>
          )}
          {searchParams?.message && (
            <div className="alert alert-success mb-4">
              <span>{searchParams.message}</span>
            </div>
          )}
          <form className="space-y-4">
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="card-actions justify-end space-x-2 pt-2">
              <button className="btn btn-primary" formAction={signup}>Sign Up</button>
            </div>
            <div className="text-center mt-4">
              <a href="/login" className="link link-hover">Already have an account? Log in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}