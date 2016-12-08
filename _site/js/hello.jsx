//import axios
var Hello = React.createClass({
   render: function() {
      return <p>Hello, world!</p>;
   }
});

var App = React.createClass({
 getInitialState: function() {
    return {
      jobs: []
    }
  },
  
  componentDidMount: function() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
   var th = this;
   this.serverRequest = 
   $.ajax({
      //type: 'POST',
      type: 'GET',
      url: this.props.source,
      //headers: {
      //     "origin":"http://localhost:4000",
      //     "My-Second-Header":"second value"
      //}
   }).done(function(data) { 
      console.log(data);
      var data = JSON.parse(data) ;
      th.setState({
        jobs: data.jobs
	//jobs:data.msg
      });
   });
  },
  
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <div>
        <h5>Jobs! {this.state.jobs}</h5> 
      </div>
    )
  }
  /*
  render: function() {
    return (
      <div>
        <h1>Jobs!</h1> 
	{this.state.jobs.map(function(job) {
          return (
            <div key={job.url} className="job">
              <a href={job.url}>
                {job.company_name}
                is looking for a 
                {job.term}
                {job.title}
              </a>
           </div>
          );
        })} 
      </div>
    )
  }
  */
});

