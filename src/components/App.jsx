import { Component } from 'react';
import * as API from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';




export class App extends Component{
  state = {
    gallery: [],
    isLoading: false,
    error: false,
  };


componentDidMount(){
    // console.log("componentDidMount");
    // console.log("componentDidMount this.state.query", this.state.query);
    // if(this.state.query){
    //   try {
    //     this.setState({ isLoading: true });
    //     const images = await API.getFetchQueryImageGallery(this.state.query);
    //     this.setState({gallery: images});
    //     console.log("images=",images);
    //     console.log(this.state.gallery);
    //   } catch (error) {
    //     this.setState({error: true});
    //     console.log(error);
    //   }finally{
    //     this.setState({isLoading: false });
    //   }
    // }
  }

  getImageGallery = async (searchQuery) => {
    try {
      this.setState({ isLoading: true });
      const images = await API.getFetchQueryImageGallery(Object.values(searchQuery));
      this.setState({gallery: images});
      console.log("images=",images);
      console.log(this.state.gallery);
    } catch (error) {
      this.setState({error: true});
      console.log(error);
    }finally{
      this.setState({isLoading: false });
    }
  };



  render(){
    const { gallery, isLoading, error } = this.state;
    console.log("render gallery=", gallery);
    return(
      <>
      <Searchbar onSubmit={this.getImageGallery}/>
      {isLoading && <Loader/>}
      {gallery && !isLoading && <ImageGallery gallery={gallery}/>}
      
      </>
    );
  }
}

