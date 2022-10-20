import Box from '../../../designSystem/Box/Box';
import SearchHeader from './SearchHeader/SearchHeader';
import SearchGridItems from './SearchGridItems/SearchGridItems';

const SearchScreen = () => {
  return (
    <Box flex={1}>
      <SearchHeader />
      <SearchGridItems />
    </Box>
  );
};

export default SearchScreen;
