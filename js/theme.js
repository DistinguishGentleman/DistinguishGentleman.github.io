$(() => {
  const SCHEMA_LIGHT = "light";
  const SCHEMA_DARK = "dark";
  const pathCss = "/css";
  let currentSchema;

  const getSchema = () => (currentSchema = localStorage.getItem("schema"));
  const setSchema = (schema) => localStorage.setItem("schema", schema);

  const getFileSchema = () => `${currentSchema}-theme.css`;

  const loadCss = (file) => {
    if (file) {
      $("#theme-css").remove();
      $("<link>")
        .attr({
          id: "theme-css",
          rel: "stylesheet",
          href: `${pathCss}/${file}?t=${Date.now()}`,
        })
        .appendTo("head");
    }
  };

  $(".theme").on("click", () => {
    currentSchema = currentSchema === SCHEMA_LIGHT ? SCHEMA_DARK : SCHEMA_LIGHT;
    setSchema(currentSchema);
    loadCss(getFileSchema());
    $("html").attr("data-bs-theme", currentSchema);
  });

  (() => {
    currentSchema = getSchema();
    if (!currentSchema) {
      currentSchema = SCHEMA_LIGHT;
      setSchema(currentSchema);
    }
    loadCss(getFileSchema());
     $("html").attr("data-bs-theme", currentSchema);
  })();
});
