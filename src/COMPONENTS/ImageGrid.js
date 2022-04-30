import React, { Component } from 'react';





// const Imagegrid = props => {

//     const urlsArr = [
//         "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//         "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ]


//     const images = urlsArr.map(
//         image => {
//             console.log(image)
//             return <img src={image} alt="" />;
//         });

//     return (
//         <div>
//             {images }
//         </div>
//     )
// };


class Imagegrid extends Component {

    urlsArr = [
        "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "https://images.pexels.com/photos/757181/pexels-photo-757181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]

    displayMethod = () => {
        return (
            this.urlsArr.map(
                image => {
                    return <img src={image} key={image} alt="" />
                }
            )
        )
    }

    render() {
        return (
            <div className='imageCarousel'>
                {this.displayMethod()}
            </div>
        );
    }
}

export default Imagegrid;

