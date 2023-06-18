export const customSelectStyles = {
  control: (base: any, props: any) => ({
    ...base,
    "maxWidth": "300px",
    "height": "44px",
    "background": "#FFFFFF",
    "boxShadow": "none",
    "border": props.isFocused
      ? "2px solid #000000"
      : "1px solid rgba(0, 0, 0, 0.16)",
    "borderRadius": "4px",
    "&:hover": {
      border: "1px solid rgba(0, 0, 0, 0.16)"
    }
  }),
  menu: (provided: any) => ({
    ...provided,
    height: "72px",
    margin: "0px",
    padding: "0px",
    color: "black",
    background: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
    borderRadius: "4px"
  })
}
