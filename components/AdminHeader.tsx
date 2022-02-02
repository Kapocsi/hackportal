import NavLink from './NavLink';

/**
 * An about header.
 */
export default function AdminHeader() {
  return (
    <section className="p-4">
      <header className="top-0 sticky flex flex-row justify-between p-2 md:p-4 items-center">
        <div className="mx-auto md:flex justify-center text-xl font-header md:text-left  gap-x-8">
          <NavLink href="/admin" exact={true}>
            Event Dashboard
          </NavLink>
          <NavLink href="/admin/scan" exact={true}>
            Scanner
          </NavLink>
          <NavLink href="/admin/users" exact={true}>
            Users Dashboard
          </NavLink>
        </div>
      </header>
    </section>
  );
}