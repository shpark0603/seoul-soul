import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionsLoading } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionsLoading(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
