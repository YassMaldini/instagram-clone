import Box from '../../../../designSystem/Box/Box';
import SearchGridOneByTwoRight from './SearchGridOneByTwoRight/SearchGridOneByTwoRight';
import SearchGridOneByTwoLeft from './SearchGridOneByTwoLeft/SearchGridOneByTwoLeft';
import SearchGridRow from './SearchGridRow/SearchGridRow';
import { FlashList } from '@shopify/flash-list';
import { topicalExploreSample } from '../../../../../utils/api/samples/topicalExploreSample';

const SearchGridItems = () => {
  return (
    <FlashList
      data={topicalExploreSample.sectional_items}
      renderItem={({ item: sectionalItems, index }) => (
        <Box flex={1}>
          {sectionalItems.layout_type === 'one_by_two_right' && (
            <SearchGridOneByTwoRight isFirstItem={index === 0} {...{ sectionalItems }} />
          )}
          {sectionalItems.layout_type === 'one_by_two_left' && (
            <SearchGridOneByTwoLeft isFirstItem={index === 0} {...{ sectionalItems }} />
          )}
          {sectionalItems.layout_type === 'media_grid' && (
            <SearchGridRow {...sectionalItems.layout_content} />
          )}
        </Box>
      )}
      estimatedItemSize={20}
    />
  );
};

export default SearchGridItems;
