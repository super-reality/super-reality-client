/* eslint-disable no-underscore-dangle */
import React from "react";

import { useSelector } from "react-redux";
import {
  ItemInner,
  Icon,
  Points,
  Title,
  Text,
  Image,
  ContainerTop,
  ContainerFlex,
  ContainerBottom,
} from "../item-inner";
import CheckButton from "../check-button";
import ShareButton from "../share-button";
import TrashButton from "../trash-button";
import { ICollectionSearch } from "../../api/types/collection/search";
import { AppState } from "../../redux/stores/renderer";
import usePopupAdd from "../../hooks/usePopupAdd";

interface CollectionProps {
  data: ICollectionSearch;
}

export default function Collection(props: CollectionProps): JSX.Element {
  const { data } = props;
  const checked = useSelector((state: AppState) =>
    state.userData.collections.includes(data._id)
  );

  const [PopupAdd, open] = usePopupAdd(checked, "collection", data._id);

  return (
    <ItemInner text>
      <PopupAdd />
      <ContainerTop>
        <Icon url={data.icon} />
        <Points points={0} />
        <Title title={data.name} sub={`${0} Subjects`} />
      </ContainerTop>
      <ContainerFlex>
        <Text>{data.description}</Text>
      </ContainerFlex>
      <ContainerFlex>
        <Image src={data.medias[0]} />
      </ContainerFlex>
      <ContainerBottom>
        <CheckButton
          style={{ margin: "auto" }}
          checked={checked}
          callback={open}
        />
        <div />
        <TrashButton type="collection" id={data._id} />
        <ShareButton style={{ margin: "auto" }} />
      </ContainerBottom>
    </ItemInner>
  );
}
