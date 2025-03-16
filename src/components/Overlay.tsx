function Overlay({ children }: { children?: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 flex items-center justify-center">
      {children}
    </div>
  )
}

export default Overlay;