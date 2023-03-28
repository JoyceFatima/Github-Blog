import { Header } from '../../components/Header';
import { SearchInput } from './components/SearchInput';

import { BlogContainer, Links, NameAndLink, ProfileCard, ProfileImg } from './styles';

export function Blogs() {
  return(
    <BlogContainer>
      <ProfileCard>
        <ProfileImg>
          <img src="" alt="Profile" />
        </ProfileImg>

        <NameAndLink>
          <h2>Cameron Williamson</h2>
          <a rel="stylesheet" href="">GITHUB</a>
        </NameAndLink>

        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
      
        <Links>
          <li>
            <a href="">cameronwll</a>
          </li>
          <li>
            <a href="">Rocketseat</a>
          </li>
          <li>
            <a href="">seguidores</a>
          </li>
        </Links>
      </ProfileCard>

      <SearchInput />
    </BlogContainer>
  )
} 