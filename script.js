/* styles.css */
body {
    margin: 0;
    font-family: 'Lobster', cursive; /* Change font to Lobster */
    background-color: #1a1a1a; /* Darker shade of black */
    color: #f5f5f5;
}

/* Header */
header {
    background-color: #2a2a2a; /* Darker shade of black */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo img {
    width: 120px;
    height: auto;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
}

nav ul li a:hover {
    background-color: #3a3a3a; /* Darker shade of black */
    border-radius: 5px;
}

/* Introduction Section */
.introduction {
    text-align: center;
    padding: 50px 20px;
    background-color: #2a2a2a; /* Darker shade of black */
    color: #fff;
}

.introduction h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.introduction h2 {
    font-size: 1.8em;
    margin-bottom: 20px;
}

.introduction p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #d2691e;
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #cd853f;
}

/* Featured Menu Section */
.featured-menu {
    text-align: center;
    padding: 50px 20px;
    background-color: #1a1a1a; /* Darker shade of black */
    color: #fff;
}

.featured-menu h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.featured-menu h3 {
    font-size: 1.8em;
    margin-bottom: 20px;
}

.menu-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.menu-item {
    background-color: #2a2a2a; /* Darker shade of black */
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    width: calc(33% - 40px);
    box-sizing: border-box;
}

.menu-item img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
}

.menu-item h4 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.menu-item p {
    font-size: 1em;
    line-height: 1.6;
}

/* About Us Section */
.about-us {
    text-align: center;
    padding: 50px 20px;
    background-color: #1a1a1a; /* Darker shade of black */
    color: #fff;
}

.about-us h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.about-us p {
    font-size: 1.2em;
    line-height: 1.6;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Events Section */
.events {
    text-align: center;
    padding: 50px 20px;
    background-color: #2a2a2a; /* Darker shade of black */
    color: #fff;
}

.events h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.events h3 {
    font-size: 1.8em;
    margin-bottom: 20px;
}

.event-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.event-item {
    background-color: #1a1a1a; /* Darker shade of black */
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    width: calc(33% - 40px);
    box-sizing: border-box;
}

.event-item h4 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.event-item p {
    font-size: 1em;
    line-height: 1.6;
}

/* Gallery Section */
.gallery {
    text-align: center;
    padding: 50px 20px;
    background-color: #1a1a1a; /* Darker shade of black */
    color: #fff;
}

.gallery h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.gallery h3 {
    font-size: 1.8em;
    margin-bottom: 20px;
}

.image-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.image-grid img {
    max-width: 300px;
    margin: 10px;
    border-radius: 10px;
}

/* Testimonials Section */
.testimonials {
    text-align: center;
    padding: 50px 20px;
    background-color: #2a2a2a; /* Darker shade of black */
    color: #fff;
}

.testimonials h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.testimonial-carousel {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .testimonial-item {
        background-color: #1a1a1a; /* Darker shade of black */
        margin: 10px;
        padding: 20px;
        border-radius: 10px;
        width: calc(33% - 40px);
        box-sizing: border-box;
    }
    
    .testimonial-item p {
        font-size: 1em;
        line-height: 1.6;
    }
    
    .testimonial-item h4 {
        font-size: 1.2em;
        margin-top: 10px;
    }
    
    /* Newsletter Section */
    .newsletter {
        text-align: center;
        padding: 50px 20px;
        background-color: #2a2a2a; /* Darker shade of black */
        color: #fff;
    }
    
    .newsletter h2 {
        font-size: 2.5em;
        margin-bottom: 10px;
    }
    
    .newsletter h3 {
        font-size: 1.8em;
        margin-bottom: 20px;
    }
    
    .newsletter form {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .newsletter input,
    .newsletter textarea {
        width: calc(100% - 40px);
        padding: 10px;
        margin: 10px;
        font-size: 1em;
        border: none;
        border-radius: 5px;
    }
    
    .newsletter button {
        padding: 10px 20px;
        background-color: #d2691e;
        color: #fff;
        text-decoration: none;
        font-size: 1.2em;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    
    .newsletter button:hover {
        background-color: #cd853f;
    }
    
    /* Contact Section */
    .contact {
        text-align: center;
        padding: 50px 20px;
        background-color: #1a1a1a; /* Darker shade of black */
        color: #fff;
    }
    
    .contact h2 {
        font-size: 2.5em;
        margin-bottom: 10px;
    }
    
    .contact h3 {
        font-size: 1.8em;
        margin-bottom: 20px;
    }
    
    .contact form {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .contact input,
    .contact textarea {
        width: calc(100% - 40px);
        padding: 10px;
        margin: 10px;
        font-size: 1em;
        border: none;
        border-radius: 5px;
    }
    
    .contact button {
        padding: 10px 20px;
        background-color: #d2691e;
        color: #fff;
        text-decoration: none;
        font-size: 1.2em;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    
    .contact button:hover {
        background-color: #cd853f;
    }
    
    /* Footer */
    footer {
        background-color: #2a2a2a; /* Darker shade of black */
        color: #fff;
        text-align: center;
        padding: 20px;
        font-size: 1em;
    }
    
    footer p {
        margin: 0;
    }
    
    footer p a {
        color: #d2691e;
        text-decoration: none;
    }
    
    footer p a:hover {
        text-decoration: underline;
    }
    
    /* Responsive Styling */
    @media (max-width: 768px) {
        .menu-item {
            width: calc(50% - 40px);
        }
    
        .event-item {
            width: calc(50% - 40px);
        }
    }
    
    @media (max-width: 480px) {
        .menu-item,
        .event-item {
            width: calc(100% - 40px);
        }
    }
}

@media (max-width: 480px) {
    .menu-item,
    .event-item {
        width: calc(100% - 40px);
    }
}

