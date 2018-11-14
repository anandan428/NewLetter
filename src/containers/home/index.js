import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Featured from './featured.react';
import TopPicks from './toppicks.react';
import Articles from '../common/article.react';
import Awards from './awards.react';
import './home.css';
import { category } from '../../modules/actions';
const Technical = 'Technical';
const General = 'General';

class Home extends Component {

    goToArticle = (id) => {
        this.props.history.push('/article/' + id);
    }

    render() {
        let techFeatured;
        let generalFeatured;
        let completeList = [];
        if (this.props.categories && this.props.Articles && this.props.categories.length > 0 && this.props.Articles.length > 0) {
            let gId = this.props.categories.find(ele => ele.title === General)._id;
            let tId = this.props.categories.find(ele => ele.title === Technical)._id;
            let techArticles = this.props.Articles.find(ele => ele.category === tId).articles;
            let generalArticles = this.props.Articles.find(ele => ele.category === gId).articles;
            techFeatured = techArticles[0];
            generalFeatured = generalArticles[0]; 
            completeList = [...techArticles, ...generalArticles];
        }
        return (
            <div className="home-container">
                <div className="home-0">
                    <Featured additionalClass='height350' article={techFeatured} goToArticle={this.goToArticle} />
                    <TopPicks />
                    <Featured additionalClass='width26' article={generalFeatured} goToArticle={this.goToArticle} />
                </div>
                <hr style={{ width: '90%', border: '0.5px solid rgba(0,0,0,0.14)', margin: '15px auto' }} />
                <div className="home-1">
                    <Articles headername={'This Month'} articles={completeList} showAuthorInfo={true} navigateToArticle={this.goToArticle}/>
                    {/* <Awards /> */}
                </div>
            </div>
        );
    }
}

const mapsStateToProps = ({ Article, Category }) => ({
    Articles: Article.Articles,
    categories: Category.categories
});

export default withRouter(connect(
    mapsStateToProps,
    null
)(Home));