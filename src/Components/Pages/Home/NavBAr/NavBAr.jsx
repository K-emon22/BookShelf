import React from "react";
import {NavLink} from "react-router";

const NavBAr = () => {
  const pages = (
    <>
      <NavLink
        className={({isActive}) =>
          ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg" : ""}`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({isActive}) =>
          ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg" : ""}`
        }
        to={"/bookshelf"}
      >
        Bookshelf
      </NavLink>
      <NavLink
        className={({isActive}) =>
          ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg" : ""}`
        }
        to={"/addBook"}
      >
        Add Book
      </NavLink>
      <NavLink
        className={({isActive}) =>
          ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg" : ""}`
        }
        to={"/myBooks"}
      >
        {" "}
        My Books
      </NavLink>
      <NavLink
        className={({isActive}) =>
          ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg" : ""}`
        }
        to={"/profile"}
      >
        Profile{" "}
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-transparent py-2">
      <nav className="flex flex-row justify-between mb-20 px-[2%]">
        <div className="flex justify-between gap-2">
          <div className="flex justify-center items-center">
            <img
              className="h-10 w-15 rounded-lg"
              src={
                "https://i.ibb.co/Q7NsLYWn/572504ff-152a-44e5-9fb4-e4d0966bab63.jpg"
              }
              alt=""
            />
          </div>
          <h1 className="my-auto font-bold text-2xl hidden lg:text-4xl [@media(min-width:851px)]:block">
            Bookshelf
          </h1>
        </div>
        <div className="my-auto hidden [@media(min-width:850Px)]:block">
          {pages}
        </div>
        <div className="[@media(min-width:850px)]:hidden my-auto">
          <h1 className="my-auto font-bold text-2xl ">Bookshelf</h1>{" "}
        </div>
        <div className=" flex flex-row gap-5">
          <div className="  hidden [@media(min-width:850Px)]:block">
            <button className="btn btn-primary">Login </button>
            <button className="btn btn-primary"> Register</button>
          </div>



          <div className=" [@media(min-width:850px)]:hidden  my-auto ">




<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
<div className="flex flex-col">
  {pages}
</div>
  </ul>
</div>



          </div>








        </div>




      </nav>
    </div>
  );
};

export default NavBAr;
