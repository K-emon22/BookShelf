import React from "react";
import {Link, NavLink} from "react-router";
import {HiMenuAlt3} from "react-icons/hi";
const NavBAr = () => {
  // const pages = (
  //   <>
  //     <NavLink
  //       className={({isActive}) =>
  //         ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg text-center" : ""}`
  //       }
  //       to={"/"}
  //     >
  //       Home
  //     </NavLink>
  //     <NavLink
  //       className={({isActive}) =>
  //         ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg text-center" : ""}`
  //       }
  //       to={"/bookshelf"}
  //     >
  //       Bookshelf
  //     </NavLink>
  //     <NavLink
  //       className={({isActive}) =>
  //         ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg text-center" : ""}`
  //       }
  //       to={"/addBook"}
  //     >
  //       Add Book
  //     </NavLink>
  //     <NavLink
  //       className={({isActive}) =>
  //         ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg text-center" : ""}`
  //       }
  //       to={"/myBooks"}
  //     >
  //       {" "}
  //       My Books
  //     </NavLink>
  //     <NavLink
  //       className={({isActive}) =>
  //         ` px-2 py-1 ${isActive ? " bg-green-400 rounded-lg text-center" : ""}`
  //       }
  //       to={"/profile"}
  //     >
  //       Profile{" "}
  //     </NavLink>
  //   </>
  // );
  const pages = (
    <>
      <NavLink
        to={"/"}
        className="relative px-2 py-1 font-semibold text-black overflow-hidden"
      >
        {({isActive}) => (
          <>
            <span
              className={`absolute inset-0 bg-blue-500 z-0 transition-transform duration-500 ease-in-out ${
                isActive ? "scale-x-100" : "scale-x-0"
              } origin-left rounded-lg`}
            />
            <span className="relative z-10">Home</span>
          </>
        )}
      </NavLink>

      <NavLink
        to={"/bookshelf"}
        className="relative px-2 py-1 font-semibold text-black overflow-hidden"
      >
        {({isActive}) => (
          <>
            <span
              className={`absolute inset-0 bg-blue-500 z-0 transition-transform duration-500 ease-in-out ${
                isActive ? "scale-x-100" : "scale-x-0"
              } origin-left rounded-lg`}
            />
            <span className="relative z-10">Bookshelf</span>
          </>
        )}
      </NavLink>

      <NavLink
        to={"/addBook"}
        className="relative px-2 py-1 font-semibold text-black overflow-hidden"
      >
        {({isActive}) => (
          <>
            <span
              className={`absolute inset-0 bg-blue-500 z-0 transition-transform duration-500 ease-in-out ${
                isActive ? "scale-x-100" : "scale-x-0"
              } origin-left rounded-lg`}
            />
            <span className="relative z-10">Add Book</span>
          </>
        )}
      </NavLink>

      <NavLink
        to={"/myBooks"}
        className="relative px-2 py-1 font-semibold text-black overflow-hidden"
      >
        {({isActive}) => (
          <>
            <span
              className={`absolute inset-0 bg-blue-500 z-0 transition-transform duration-500 ease-in-out ${
                isActive ? "scale-x-100" : "scale-x-0"
              } origin-left rounded-lg`}
            />
            <span className="relative z-10">My Books</span>
          </>
        )}
      </NavLink>

      <NavLink
        to={"/profile"}
        className="relative px-2 py-1 font-semibold text-black overflow-hidden"
      >
        {({isActive}) => (
          <>
            <span
              className={`absolute inset-0 bg-blue-500 z-0 transition-transform duration-500 ease-in-out ${
                isActive ? "scale-x-100" : "scale-x-0"
              } origin-left rounded-lg`}
            />
            <span className="relative z-10">Profile</span>
          </>
        )}
      </NavLink>
    </>
  );
  const button = (
    <>
      <Link to={"/login"}>
        {" "}
        <button className="btnn">Login </button>
      </Link>
      <Link to={"/register"}>
        {" "}
        <button className="btnn "> Register</button>
      </Link>
    </>
  );

  return (
    <div className="sticky top-0 z-50   backdrop-blur-sm bg-blue-600/30">
      <nav className="flex flex-row justify-between mb-10 py-2 px-[2%]">
        <div className="flex justify-between gap-2 ">
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
        <div className="my-auto hidden [@media(min-width:850Px)]:block ">
          <div className="flex gap-4  xl:gap-8 font-semibold">{pages}</div>
        </div>
        <div className="[@media(min-width:850px)]:hidden my-auto">
          <h1 className="my-auto font-bold text-2xl ">Bookshelf</h1>{" "}
        </div>
        <div className=" flex flex-row gap-5">
          <div className=" space-x-3 hidden [@media(min-width:850Px)]:block">
            {button}
          </div>

          <div className=" [@media(min-width:850px)]:hidden  my-auto ">
            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className=" m-1">
                <HiMenuAlt3 size={25} className="mt-2.5" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border-2"
              >
                <div className="flex flex-col font-semibold ">
                  {pages}
                  <hr className="mt-2" />
                  <div className="flex flex-row justify-center items-center mt-5  gap-2">
                    {button}
                  </div>
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
