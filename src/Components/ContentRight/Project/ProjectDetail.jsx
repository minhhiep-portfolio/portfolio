import React from 'react';
import { Redirect } from 'react-router-dom';
import {
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider,
	Button,
} from "@material-ui/core";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Done from "@material-ui/icons/Done";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import ModalReview from "./ModalReview";

const settingSlider = {
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />
};
const ImgURL = `${window.location.origin}/Images/`;

class ProjectDetail extends React.Component {
	state = {
		isReview: false,
		reviewURL: ''
	}

	render() {
		const { projectInfo } = this.props;
		let { isReview } = this.state;
		return (
			<React.Fragment>
				{this.showDetailMovie(projectInfo, isReview)}
			</React.Fragment>
		);
	}
	showDetailMovie = (detail, flagReview) => {
		return (detail !== undefined)
			? (
				<div style={{ padding: "2rem", height: "100vh" }}>
					<Typography
						variant="display3"
						color="primary"
						style={{ fontWeight: "bold", marginBottom: "1.8rem", fontSize: "2rem", textAlign: "center" }}
					>
						{detail.Name}
					</Typography>
					<div style={{ marginBottom: "3rem", textAlign: "center" }}>
						<Slider {...settingSlider}>
							{this.showImageReview(detail.ImageReview)}
						</Slider>
						{
							detail.Review !== null &&
							<Button
								style={{ width: "100%", marginTop: 20 }}
								size="large"
								color="primary"
								onClick={() => this.changeFlagReview()}
							>
								Review
							</Button>
						}
					</div>
					<List
						dense={false}
						subheader={
							<Typography variant="headline" style={{ paddingLeft: 5 }}>
								Công Nghệ Và Kiến Thức Áp Dụng Vào Project :
							</Typography>}
					>
						{this.showDetail(detail.Technologies)}

					</List>
					{
						detail.Knowledges !== null &&
						<React.Fragment>
							<Divider light style={{ margin: "1rem 0" }} />
							<List
								dense={false}
								subheader={
									<Typography variant="headline" style={{ paddingLeft: 5 }}>
										Hoàn Thành Dự Án Tôi Đã Học Được:
									</Typography>}
							>
								{this.showDetail(detail.Knowledges)}
							</List>
						</React.Fragment>
					}
					{
						detail.Knowledges === null &&
						<React.Fragment>
							<Typography variant="headline" style={{ paddingLeft: 5 }}>
								Đang Hoàn Thành...
							</Typography>
							<Divider light style={{ margin: "1rem 0" }} />
						</React.Fragment>

					}
					{
						flagReview === true &&
						<ModalReview
							open={true}
							review={detail.Review}
							receiveProp={(data) => this.receiveProp(data)}
						/>
					}
				</div>
			)
			: (<Redirect to={"NotFoundPage"} exact={true} />);
	}
	receiveProp = (data) => {
		this.setState({
			isReview: data
		})
	}
	showImageReview = (images) => {
		let res = <div>Đang Cập Nhật</div>;
		if (images.length > 0) {
			res = images.map((img, index) => {
				return (
					<img
						key={index}
						style={{ height: "300px" }}
						src={`${process.env.PUBLIC_URL}/Images/${img}`}
						alt={`Hình Ảnh ${img}`}
					/>
				);
			})
		}
		return res;
	}
	showDetail = (techs) => {
		let res = <div>Đang Cập Nhật</div>;
		if (techs.length > 0) {
			res = techs.map((tech, index) => {
				return (
					<ListItem key={index}>
						<ListItemIcon>
							<Done />
						</ListItemIcon>
						<ListItemText primary={tech} />
					</ListItem>
				);
			})
		}
		return res;
	}
	changeFlagReview = () => {
		this.setState({
			isReview: true
		})
	}
}
export default ProjectDetail;