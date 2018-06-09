
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?cs=srgb&dl=ancient-arch-arch-bridge-507410.jpg&fm=jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=animal-big-big-cat-247502.jpg&fm=jpg'
  },
  {
    id: 3,
    title: 'Olimp w ogniu',
    desc: 'Film o ataku terrorystycznym',
    img: 'https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?cs=srgb&dl=administration-architecture-building-129112.jpg&fm=jpg'
  },
  {
    id: 4,
    title: 'Transporter',
    desc: 'Film o kurierze',
    img: 'https://images.pexels.com/photos/1135379/pexels-photo-1135379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    
  },
  {
    id: 5,
    title: 'Szybcy i wściekli',
    desc: 'Film o wyścigach',
    img: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
    
];


var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var MovieImg = React.createClass({
   propTypes: {
       img: React.PropTypes.string.isRequired,
   },
    render: function() {
        return (
            React.createElement('img', {src: this.props.img, width: 300})
        )
    }
});

var MovieList = React.createClass({
    render: function() {
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MovieImg, {img: this.props.movie.img, width: 300})   
            )
        )
    }
});


var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie})
}); 

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
  ); 

ReactDOM.render(element, document.getElementById('app')); 

