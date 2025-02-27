import React from 'react'
import { FaBell } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function Header() {
    return (
        <>
            <div className='header' style={{ display: 'flex' }}>
                <div className='user' style={{ display: "flex" }}>
                    <img className='profileimg' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwECB//EADoQAAICAQIEAgcGAgsAAAAAAAABAgMRBAUSITFRIkEGE2GBocHRFDJCYnGRI1IVJTM1Q3KCkrHh8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOOsv8As+nlbjLXJLuwOllkK48Vk4xj3bIkt00cf8ST/SDKK22d0+O2TlLuz4XLoBff0tpe8/8AafUd10j/ABSX6wZnwBqKb6r4uVU1JLrjy9x1MpCcq5KcJOMo9GvIvtu1y1S4J8rorml5+1ATQAAAAAAAAAAAAAAADObnqJXaqak/BBtRWTRlFp6I3b7GhxTTueU/NLn8gPrTbHrtRSrVCMIyWVxyw2evYNxi8KqEvarF8zYADJw9G9c/vOmP+rJ9v0a1aXK6l/v9DUgDDa3QanRNfaK8RfSSeUzjp7pUXQuj1i+ns8zYb8lLadTlZwk1+uUYpvl7gNcnlZQPmtYriuyS+B9AAAAAAAAAAAAAAAhbTTxekF88f2abz2ykvmyb7jroNJPT7lq5Sw1ZCtqS96+QFiAAAAAh7vBz2vUxSz/Db/bmYqqPHZCP80kvifoEkpJxksprDRl1tPq99VFHE6YYsy/wx/8AQLMHS+tVWcKeeWTmAAAAAAAAAAAAAAC0rxKEZebSKssNNNSqjFPxJdAOwAAAAAecMU3JJJvq+56c77Y1xeX4vJAQdRPjtk106I5gAAAAAAAAAAAAAAA6aeXBdFvp0ZzAFsDlp7VbWm/veaOoAAAG0k2+iRUt5bb6sl6u7ii66/PqyK002pLDQHgAAAAAAAAAAAAAAAAAA60Nqb4XjkS43NdY/EiVeG2pd8t/L/gmcAD13aPxOc5Tnyb5ew6cIaQHGNayiJr740aqqM14bspSz0kvL4onW2QprlZZJRhFZbfkY3ctbZrdQ7JZjFcoR/lX1A0gIW2a1amvgsx66K5/mXcmgAAAAAAAAAAAB5OUYRcptRS828Fdqd3qhyoj6yXd8kgLFyUU5NpJebIT18btRXptJ4pTlwuflH68slNqNVdqZZum5JdF0S9xO2BKOptvcW3VDkl3fL6gaKccamtpdiWRNNOU4xd2FNc8pcj7tvlH7kc/qB3kz46nCrUcbUZrhl8GVu/7j6mD0tMsWyXja/CvqwIG+7itVb9nol/Ag+bX439CqAA9TaacXhro0WGm3W2vlevWx79GvqVwA1Gn1FWohxUzUkuq6NHUykZzrkp1ycZLo0Wem3iSxHUw4vzR+aAuAc6bq748VU1JeeOqOgAAACv3bVz01cIVPE55eeyRYGd3a712tnj7sPCvmBGsssslxWTlN/meT5AAF76OVqVN035yS/Zf9lEzS+jq/q/Pex/ICzSwGsg9Ag7lbXpdPKyXN9IruzLTnKyTnZJyk3lt+ZM3bW/bNT4H/Chyh7e7IIAAAAAAAAHsJSrlxQk4yXRouNs3Cd1nqb8OTXhl0yUx91TdVsbV1g8oDVA8TUkmujWUwB5ZJxrlJdUmzKZb5t5bAAAAAzT+j/8Adsf88gALEgb5dOnb5ut4cmot+xgAZVHoAAAAAAAAAAAAaXbZOeiplLrwgAD/2Q==" alt="" />
                    <div>
                        <p className='profileName'>اهورا شاکرمی</p>
                        <p className='profileJob'>برنامه نویس فرانت اند</p>
                    </div>
                </div>
                <div className='form'>
                    <input type="search" className='searchBox' placeholder='جست و جو کنید...' />
                    <button type="button" style={{padding: "8px 15px"}} className='searchBtn'>جست و جو</button>
                </div>
                <div className='icons'>
                    <button type="button" className='navBtn'><FaBell /></button>
                    <button type="button" className='navBtn'><MdSunny /></button>
                </div>
            </div>
        </>
    )
}
