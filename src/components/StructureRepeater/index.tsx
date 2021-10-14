import { Fragment, useState } from 'react'
import { capitalizeAll } from '@utils/text'
import { format } from 'date-fns'

type ProfileProps = {
  id: string
  name: string
  nickname: string
}

type AccountProps = {
  id: string
  username: string
  profile_id: ProfileProps
}

type StructurePositionProps = {
  id: string
  name: string
  description: string
  type: number
}

type StructureProps = {
  id: string
  user_id: any
  account_id: AccountProps
  created_at: string
  updated_at: string
  children: StructureProps[] | []
  structure_position_id: StructurePositionProps
}

type StructureRepeaterProps = {
  structure?: StructureProps[]
}

const StructureRepeater: React.FC<StructureRepeaterProps> = ({ structure }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <>
      {structure &&
        structure.map(item => {
          return (
            <Fragment key={item.id}>
              <tr>
                <td>
                  {item?.user_id.nickname &&
                    !item?.user_id.nickname.includes('Empty') && (
                      <b>{capitalizeAll(item?.user_id.nickname)}</b>
                    )}
                  <br />
                  {capitalizeAll(item?.user_id.full_name)}
                </td>
                <td>{item?.structure_position_id?.name}</td>
                <td></td>
              </tr>
              <StructureRepeater structure={item.children} />
            </Fragment>
          )
        })}
    </>
  )
}

export default StructureRepeater
