<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Note</h2>
        <p>To: <xsl:value-of select="note/to"/></p>
        <p>From: <xsl:value-of select="note/from"/></p>
        <p>Heading: <xsl:value-of select="note/heading"/></p>
        <p>Message: <xsl:value-of select="note/body"/></p>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
