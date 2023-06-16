import { LinkProps } from "react-router-dom"

export type TSocial = {
  name: string
  link: LinkProps["to"]
  img?: string
}

export type TSocials = Array<TSocial>
