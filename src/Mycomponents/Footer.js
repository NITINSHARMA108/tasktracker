import React from 'react'


export const Footer = () => {
    const s={
        color:'floralwhite'
    }
    return (
        <div className="bg-dark text-center text-light">
            <div >
                <a style={s} className="mx-3" href="https://www.instagram.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a style={s} className="mx-3" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a style={s} className="mx-3" href="https://www.instagram.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a style={s} className="mx-3" href="https://www.instagram.com/" target="_blank"><i class="fab fa-github"></i></a>
               
            </div>
            <div>
                Copyright &copy;2021
            </div>
        </div>
    )
}
