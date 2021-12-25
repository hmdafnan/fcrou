import React, {Component} from 'react';
import { Carousel, CarouselCaption, CarouselItem, CarouselControl } from 'reactstrap';

const items= [
    {
        src: '/assets/carousel/slide2.jpg',
        altText: 'Future Computer',
        caption: 'Make everything as simple as possible, but not simpler.'
    },
    {
        src: '/assets/carousel/slide1.jpg',
        altText: 'Tally Prime new update available',
        caption: ''
    },
    {
        src: '/assets/carousel/slide6.jpeg',
        altText: 'Featured Products',
        caption: 'Available on Future Computer.'
    },
    {
        src: '/assets/carousel/slide4.jpeg',
        altText: 'Team of experts',
        caption: 'Skilled employees to place your trust on..'
    },
    {
        src: '/assets/carousel/slide5.jpeg',
        altText: 'We have everything',
        caption: 'Wide range of Laptops and Desktops at our disposal.'
    },
    {
        src: '/assets/carousel/slide3.jpg',
        altText: 'We can fix everything',
        caption: 'Wide range of Laptops and Desktops at our disposal.'
    }
];

class HCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} class="home-carousel" height="100%" width="100%"/>
					<CarouselCaption captionText={item.caption} captionHeader={item.altText} className="carousel-caption" />
				</CarouselItem>
			);
		});

		return (
			<div>
				
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					{slides}
					<CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
					<CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
				</Carousel>
			</div>
		);
	}
}

export default HCarousel;