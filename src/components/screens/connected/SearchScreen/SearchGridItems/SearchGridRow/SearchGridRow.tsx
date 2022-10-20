import { Dimensions } from "react-native"
import { TopicalExploreFeedResponseLayout_content } from "../../../../../../types/api/endpoints/feed/topicalDiscover.feed.types"
import FeedGridDoubleItem from "../../../../../commons/FeedGridDoubleItem/FeedGridDoubleItem"
import FeedGridSimpleItem from "../../../../../commons/FeedGridSimpleItem/FeedGridSimpleItem"
import Box from "../../../../../designSystem/Box/Box"

const SearchGridRow = (layoutContent: TopicalExploreFeedResponseLayout_content) => {
  return (
    <Box 
      flexDirection="row" 
      justifyContent="space-between"
    >
    {
      layoutContent.medias?.map(({ media }) => (
        <FeedGridSimpleItem {...media} key={media.pk} />
      ))
    }
    </Box>
  )
}

export default SearchGridRow