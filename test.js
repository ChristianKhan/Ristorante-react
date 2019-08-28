import React,{Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state={

        }

    }



    renderDishDetail(dish){

        if(dish!=null)
        {
            return(
                <div className="col-sm-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><b>{dish.name}</b></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }

    renderDishComments(dishcomments){

        if(dishcomments!=null)
        {
            return(
                <div className="col-sm-12 col-md-5 m-1">
                    <h4>comments</h4>
                    <ul className="list-unstyled">
                        {dishcomments.map((comment)=>{
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author},&nbsp;{new Intl.DateTimeFormat('en-Us',{year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                );
                            }
                        )
                        }
                    </ul>
                </div>
             );

        }
        else
        {
            return(<div></div>);
        }
    }



    render(){

        if(this.props.selectedDish!=null)
        {
            return(

                <div className="container">
                    <div className="row">

                            {this.renderDishDetail(this.props.selectedDish)}

                            {this.renderDishComments(this.props.selectedDish.comments)}

                    </div>
                </div>

            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;
