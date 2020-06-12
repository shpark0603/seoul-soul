import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionsLoading } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionsLoading(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
