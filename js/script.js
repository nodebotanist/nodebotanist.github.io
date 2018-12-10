Terminal.applyAddon(fit)

let term = new Terminal({})

term.open(document.getElementById('#terminal'))

term.prompt = () => {
  term.write('\r\n$ ')
}

term.fit()
term.prompt()

term._core.register(term.addDisposableListener('key', (key, ev) => {
  const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

  if (ev.keyCode === 13) {
    term.prompt();
  } else if (ev.keyCode === 8) {
    // Do not delete the prompt
    if (term.x > 2) {
      term.write('\b \b');
    }
  } else if (printable) {
    term.write(key);
  }
}));