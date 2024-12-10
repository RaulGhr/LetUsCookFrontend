import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
import thumbsUpIcon from './images/thumbs-up.jpg';
import thumbsDownIcon from './images/thumbs-down.jpeg';
import heartIconWhite from './images/heart-white.jpg';
import heartIconRed from './images/heart-red.jpeg';

const ProfilePage = () => {
    const [items, setItems] = useState([
        { id: 1, likes: 123, dislikes: 123, isWishListed: false },
        { id: 2, likes: 123, dislikes: 123, isWishListed: false },
        { id: 3, likes: 123, dislikes: 123, isWishListed: false },
        { id: 4, likes: 123, dislikes: 123, isWishListed: false },
    ]);

    const handleLike = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, likes: item.likes + 1 } : item
            )
        );
    };

    const handleDislike = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, dislikes: item.dislikes + 1 } : item
            )
        );
    };

    const toggleWishlist = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, isWishListed: !item.isWishListed } : item
            )
        );
    };

    return (
        <div className="profile-page">
            <header className="header">
                <nav>
                    <ul>
                        <li><Link to="/feed">Feed</Link></li>
                        <li><Link to="/explore">Explore</Link></li>
                        <li><Link to="/planner">Planner</Link></li>
                        <li><Link to="/shopping-list">Shopping List</Link></li>
                    </ul>
                </nav>
                <div className="profile-link">Profile</div>
            </header>

            <main className="profile-content">
                <div className="profile-info">
                    <div className="profile-picture">profile picture</div>
                    <div className="profile-details">
                        <h2>Username</h2>
                        <p>0 Following 0 Followers</p>
                    </div>
                </div>

                <div className="tabs">
                    <span className="tab">Created</span>
                    <span className="tab active">Saved</span>
                </div>

                <div className="saved-items">
                    {items.map((item) => (
                        <div className="saved-item" key={item.id}>
                            <div className="item-image">Retete</div>
                            <div className="item-details">
                                <p>username</p>
                                <p>name</p>
                                <p>ingredients | prep time</p>
                                <div className="item-icons">
                                    <button className="icon-button" onClick={() => handleLike(item.id)}>
                                        <img src={thumbsUpIcon} alt="Like"/>
                                    </button>
                                    <span>{item.likes}</span>
                                    <button className="icon-button" onClick={() => handleDislike(item.id)}>
                                        <img src={thumbsDownIcon} alt="Dislike"/>
                                    </button>
                                    <span>{item.dislikes}</span>
                                    <button className="icon-button" onClick={() => toggleWishlist(item.id)}>
                                        <img
                                            src={item.isWishListed ? heartIconRed : heartIconWhite}
                                            alt="Wishlist"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
