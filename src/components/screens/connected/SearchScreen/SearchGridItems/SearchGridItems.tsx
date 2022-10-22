import Box from '../../../../designSystem/Box/Box';
import SearchGridOneByTwoRight from './SearchGridOneByTwoRight/SearchGridOneByTwoRight';
import SearchGridOneByTwoLeft from './SearchGridOneByTwoLeft/SearchGridOneByTwoLeft';
import SearchGridRow from './SearchGridRow/SearchGridRow';
import { FlashList } from '@shopify/flash-list';
import { topicalExploreSample } from '../../../../../utils/api/samples/topicalExploreSample';
import useTopicalExploreFeed from '../../../../../hooks/feed/useTopicalExploreFeed/useTopicalExploreFeed';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';

const SearchGridItems = () => {
  const {
    data: topicalExploreFeed,
    isLoading
  } = useTopicalExploreFeed()

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  // useEffect(() => {
  //   console.log('BEGIN **********')
  //   topicalExploreFeed?.sectional_items.map(item => {
  //     console.log('item.layout_type', item.layout_type)
  //   })
  //   console.log('********** END')
  // }, [topicalExploreFeed])

  return (
    <FlashList
      data={topicalExploreFeed?.sectional_items}
      renderItem={({ item: sectionalItems, index }) => {
        console.log(`INDEX ===>`, index)
        return (
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
        )
      }}
      estimatedItemSize={20}
    />
  );
};

export default SearchGridItems;
