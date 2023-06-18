import { Component } from 'react';
import * as API from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
  
    if(searchQuery.query!==''){
      try {
        this.setState({ isLoading: true });
        const images = await API.getFetchQueryImageGallery(searchQuery.query);
        if (images.length===0){
          toast.error('Sorry, there are no images matching your search query. Please try again.');
        }
        else{
          this.setState({gallery: images});
          console.log("images=",images);
          console.log(this.state.gallery);

        }
      } catch (error) {
        this.setState({error: true});
        toast.error(error);
      
      }finally{
        this.setState({isLoading: false });
      }
    }
    else{
      toast.error('Empty search input');
    }
  };



  render(){
    const { gallery, isLoading, error } = this.state;

    return(
      <>
      <ToastContainer autoClose="3000" theme="colored"/>
      <Searchbar onSubmit={this.getImageGallery}/>
      {isLoading && <Loader/>}
      {gallery && !isLoading && <ImageGallery gallery={gallery}/>}
      
      </>
    );
  }
}

