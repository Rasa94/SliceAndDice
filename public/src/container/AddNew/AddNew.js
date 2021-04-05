import React from 'react';
import axios from 'axios';
import './addNew.css';
import banner2 from './../../assets/banners/banner2.jpg';
import { FormField } from './../../components/FormField/FormField';
import { FormList } from './../../components/FormList/FormList';

export class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                name: '',
                description: '',
                ingredients: [],
                steps: []
            },
            formStep: 1,
            arrayElValue: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.nextStepHandler = this.nextStepHandler.bind(this);
        this.addToArrayHandler = this.addToArrayHandler.bind(this);
        this.deleteFromArrayHandler = this.deleteFromArrayHandler.bind(this);
    }

    nextStepHandler(e) {
        e.preventDefault();
        this.setState({ 
            formStep: this.state.formStep + 1
        });
    }

    onChangeHandler(e) {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        if(e.target.name === 'ingredients') {
            this.setState({
                ...this.state,
                arrayElValue: value
            });
        } else if(e.target.name === 'steps') {
            this.setState({
                ...this.state,
                arrayElValue: value
            });
        } else {
            this.setState({
                recipe: {
                    ...this.state.recipe,
                    [name]: value
                }
            });
        }
        
    }

    addToArrayHandler(e) {
        e.preventDefault();
        this.setState(state => {
            let el;
            if(state.arrayElValue === '') {return}
            e.target.name === 'ingredients' && (el = state.recipe.ingredients.concat(state.arrayElValue));
            e.target.name === 'steps' && (el = state.recipe.steps.concat(state.arrayElValue));
            
            return {
                recipe: {
                    ...state.recipe,
                    [e.target.name]: el
                },
                arrayElValue: ''
            }
        });
    }

    deleteFromArrayHandler(comparisonEl, e) {
        e.preventDefault();

        const filter = (arr) => {
            const filtered = arr.filter(el => el !== comparisonEl);
            return filtered ;
        }

        this.setState(state => {
            let arr;
            e.target.name === 'ingredients' && (arr = filter(state.recipe.ingredients));
            e.target.name === 'steps' && (arr = filter(state.recipe.steps));
            return {
                recipe: {
                    ...state.recipe,
                    [e.target.name]: arr
                }
            }
        })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        console.log(this.state);
        // axios.post('sliceanddice/', this.state.recipe)
        //     .then(data => console.log(data))

        this.state.formStep === 5 && this.setState({
                                                        recipe: {
                                                            name: '',
                                                            description: '',
                                                            ingredients: [],
                                                            steps: []
                                                        },
                                                        formStep: 1
                                                    });
    }


    render() {
        return (
            <div className="addNew">
                {/* <img src={banner2} className='addNew__banner' alt='banner'/> */}
                <div className='addNew__banner'></div>
                <form className='recipeForm' onSubmit={this.onSubmitHandler}>
                    {
                        this.state.formStep === 1 && <FormField labelProp='Name' typeProp='text' nameProp='name' valueProp={this.state.recipe.name} eventProp={this.onChangeHandler} />
                    }
                    {
                        this.state.formStep === 2 && <FormField labelProp='Description' typeProp='text' nameProp='description' valueProp={this.state.recipe.description} eventProp={this.onChangeHandler} />
                    }
                    {
                        this.state.formStep === 3 && <FormField labelProp='Ingredients' typeProp='text' nameProp='ingredients' valueProp={this.state.arrayElValue} eventProp={this.onChangeHandler} button={true} btnEvent={this.addToArrayHandler}/>
                    }
                    {
                        this.state.formStep === 3 && <FormList step={this.state.recipe.ingredients} nameProp='ingredients' deleteEvent={this.deleteFromArrayHandler}/>
                    }
                    {
                        this.state.formStep === 4 && <FormField labelProp='Steps' typeProp='text-area' nameProp='steps' valueProp={this.state.arrayElValue} eventProp={this.onChangeHandler} button={true} btnEvent={this.addToArrayHandler}/>
                    }
                    {
                        this.state.formStep === 4 && <FormList step={this.state.recipe.steps} nameProp='steps' deleteEvent={this.deleteFromArrayHandler}/>
                    }
                    {
                        this.state.formStep === 5 && <FormField typeProp='submit' nameProp='submit'/>
                    }  
                    {
                        this.state.formStep < 5 && <button className="nextStepBtn" onClick={this.nextStepHandler}>Next</button>
                    }
                </form>
            </div>
        )
    }
}